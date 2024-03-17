<!doctype html>
<html lang="en">
<head>

    {{-- meta with favicon --}}
    @include('components.meta')

    {{-- title --}}
    <title>Front Panel</title>

    {{-- source --}}
    @include('components.source')

    {{-- app js --}}
    @vite('resources/js/front/app.js')

</head>
    <body class="front-portal">
        <div id="app"></div>
        @include('components.script')
    </body>
</html>
