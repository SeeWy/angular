import {
  PostMessageBus,
  PostMessageBusSink,
  PostMessageBusSource
} from '../web_workers/shared/post_message_bus';
import {MessageBus} from '../web_workers/shared/message_bus';
import {APP_INITIALIZER} from '@angular/core';
import {Injector, Injectable, Provider} from '@angular/core/src/di';
import {
  WORKER_RENDER_APPLICATION_COMMON,
  WORKER_SCRIPT,
  initializeGenericWorkerRenderer
} from './worker_render_common';
import {BaseException} from '@angular/facade';
import {CONST_EXPR} from '@angular/facade';

/**
 * Wrapper class that exposes the Worker
 * and underlying {@link MessageBus} for lower level message passing.
 */
@Injectable()
export class WebWorkerInstance {
  public worker: Worker;
  public bus: MessageBus;

  /** @internal */
  public init(worker: Worker, bus: MessageBus) {
    this.worker = worker;
    this.bus = bus;
  }
}

/**
 * An array of providers that should be passed into `application()` when initializing a new Worker.
 */
export const WORKER_RENDER_APPLICATION: Array<any /*Type | Provider | any[]*/> = CONST_EXPR([
  WORKER_RENDER_APPLICATION_COMMON,
  WebWorkerInstance,
  new Provider(APP_INITIALIZER,
               {
                 useFactory: (injector) => () => initWebWorkerApplication(injector),
                 multi: true,
                 deps: [Injector]
               }),
  new Provider(MessageBus, {useFactory: (instance) => instance.bus, deps: [WebWorkerInstance]})
]);

function initWebWorkerApplication(injector: Injector): void {
  var scriptUri: string;
  try {
    scriptUri = injector.get(WORKER_SCRIPT);
  } catch (e) {
    throw new BaseException(
        "You must provide your WebWorker's initialization script with the WORKER_SCRIPT token");
  }

  let instance = injector.get(WebWorkerInstance);
  spawnWebWorker(scriptUri, instance);

  initializeGenericWorkerRenderer(injector);
}

/**
 * Spawns a new class and initializes the WebWorkerInstance
 */
function spawnWebWorker(uri: string, instance: WebWorkerInstance): void {
  var webWorker: Worker = new Worker(uri);
  var sink = new PostMessageBusSink(webWorker);
  var source = new PostMessageBusSource(webWorker);
  var bus = new PostMessageBus(sink, source);

  instance.init(webWorker, bus);
}