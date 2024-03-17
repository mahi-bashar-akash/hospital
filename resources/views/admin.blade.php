<!doctype html>
<html lang="en">
<head>

    {{-- meta with favicon --}}
    @include('components.meta')

    {{-- title --}}
    <title>Admin Panel</title>

    {{-- source --}}
    @include('components.source')

    {{-- app js --}}
    @vite('resources/js/admin/app.js')

</head>
    <body class="admin-portal">
        <div id="app"></div>
        @include('components.script')
    </body>
</html>
