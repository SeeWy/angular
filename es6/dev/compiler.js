/**
 * @module
 * @description
 * Starting point to import all compiler APIs.
 */
export { PLATFORM_DIRECTIVES, PLATFORM_PIPES, COMPILER_PROVIDERS, TEMPLATE_TRANSFORMS, CompilerConfig, RenderTypes, UrlResolver, DEFAULT_PACKAGE_URL_PROVIDER, createOfflineCompileUrlResolver, XHR, ViewResolver, DirectiveResolver, PipeResolver, SourceModule, NormalizedComponentWithViewDirectives, OfflineCompiler, CompileMetadataWithIdentifier, CompileMetadataWithType, CompileIdentifierMetadata, CompileDiDependencyMetadata, CompileProviderMetadata, CompileFactoryMetadata, CompileTokenMetadata, CompileTypeMetadata, CompileQueryMetadata, CompileTemplateMetadata, CompileDirectiveMetadata, CompilePipeMetadata } from 'angular2/src/compiler/compiler';
export * from 'angular2/src/compiler/template_ast';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGlsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLUl5SzNnMnZSLnRtcC9hbmd1bGFyMi9jb21waWxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBQ0gsU0FDRSxtQkFBbUIsRUFDbkIsY0FBYyxFQUNkLGtCQUFrQixFQUNsQixtQkFBbUIsRUFDbkIsY0FBYyxFQUNkLFdBQVcsRUFDWCxXQUFXLEVBQ1gsNEJBQTRCLEVBQzVCLCtCQUErQixFQUMvQixHQUFHLEVBQ0gsWUFBWSxFQUNaLGlCQUFpQixFQUNqQixZQUFZLEVBQ1osWUFBWSxFQUNaLHFDQUFxQyxFQUNyQyxlQUFlLEVBQ2YsNkJBQTZCLEVBQzdCLHVCQUF1QixFQUN2Qix5QkFBeUIsRUFDekIsMkJBQTJCLEVBQzNCLHVCQUF1QixFQUN2QixzQkFBc0IsRUFDdEIsb0JBQW9CLEVBQ3BCLG1CQUFtQixFQUNuQixvQkFBb0IsRUFDcEIsdUJBQXVCLEVBQ3ZCLHdCQUF3QixFQUN4QixtQkFBbUIsUUFDZCxnQ0FBZ0MsQ0FBQztBQUV4QyxjQUFjLG9DQUFvQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbW9kdWxlXG4gKiBAZGVzY3JpcHRpb25cbiAqIFN0YXJ0aW5nIHBvaW50IHRvIGltcG9ydCBhbGwgY29tcGlsZXIgQVBJcy5cbiAqL1xuZXhwb3J0IHtcbiAgUExBVEZPUk1fRElSRUNUSVZFUyxcbiAgUExBVEZPUk1fUElQRVMsXG4gIENPTVBJTEVSX1BST1ZJREVSUyxcbiAgVEVNUExBVEVfVFJBTlNGT1JNUyxcbiAgQ29tcGlsZXJDb25maWcsXG4gIFJlbmRlclR5cGVzLFxuICBVcmxSZXNvbHZlcixcbiAgREVGQVVMVF9QQUNLQUdFX1VSTF9QUk9WSURFUixcbiAgY3JlYXRlT2ZmbGluZUNvbXBpbGVVcmxSZXNvbHZlcixcbiAgWEhSLFxuICBWaWV3UmVzb2x2ZXIsXG4gIERpcmVjdGl2ZVJlc29sdmVyLFxuICBQaXBlUmVzb2x2ZXIsXG4gIFNvdXJjZU1vZHVsZSxcbiAgTm9ybWFsaXplZENvbXBvbmVudFdpdGhWaWV3RGlyZWN0aXZlcyxcbiAgT2ZmbGluZUNvbXBpbGVyLFxuICBDb21waWxlTWV0YWRhdGFXaXRoSWRlbnRpZmllcixcbiAgQ29tcGlsZU1ldGFkYXRhV2l0aFR5cGUsXG4gIENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEsXG4gIENvbXBpbGVEaURlcGVuZGVuY3lNZXRhZGF0YSxcbiAgQ29tcGlsZVByb3ZpZGVyTWV0YWRhdGEsXG4gIENvbXBpbGVGYWN0b3J5TWV0YWRhdGEsXG4gIENvbXBpbGVUb2tlbk1ldGFkYXRhLFxuICBDb21waWxlVHlwZU1ldGFkYXRhLFxuICBDb21waWxlUXVlcnlNZXRhZGF0YSxcbiAgQ29tcGlsZVRlbXBsYXRlTWV0YWRhdGEsXG4gIENvbXBpbGVEaXJlY3RpdmVNZXRhZGF0YSxcbiAgQ29tcGlsZVBpcGVNZXRhZGF0YVxufSBmcm9tICdhbmd1bGFyMi9zcmMvY29tcGlsZXIvY29tcGlsZXInO1xuXG5leHBvcnQgKiBmcm9tICdhbmd1bGFyMi9zcmMvY29tcGlsZXIvdGVtcGxhdGVfYXN0JztcbiJdfQ==