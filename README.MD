## Installation

### Nswag studio

Ej nödvändigt för att köra demo.

https://github.com/RicoSuter/NSwag/wiki/NSwagStudio

`choco install nswagstudio`

### .Net 6

För att köra nswag på ickewindowsmaskin samt test api .net 6 sdk.

https://dotnet.microsoft.com/en-us/download/dotnet/6.0

## Köra

### API

Gå till dolder för TestApi samt kör `dotnet run` i CLI. Förutsätter att .NET SDK är installerat.

### Generera kod

I både react och angular projekt finns npm kommandot `npm run generate-api-client`.
Ifall du är på windows dator men ej vill ladda ned .NET SDK. Kan du ändra `/runtime:Net60`
till `/runtime:WinX64`.

### FE kod

Kör med `npm run start`.
