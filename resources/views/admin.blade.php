<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Admin Panel</title>
    @vite('resources/scss/styles.scss')
    @vite('resources/js/admin/app.js')
</head>
<body class="admin-portal">
    <div id="app"></div>
    <script type="application/javascript">
        window.core = {
            APP_NAME: 'Hospital',
            APP_URL: '{{env('APP_URL')}}'
        };
    </script>
</body>
</html>
