<!doctype html>
<html lang="en">
<head>

    {{-- meta --}}
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    {{-- title --}}
    <title>Front Panel</title>

    {{-- owl carousel min css --}}
    <link rel="stylesheet" href="{{asset('source-code/owl.carousel/dist/assets/owl.carousel.min.css')}}">

    {{-- owl theme default min css --}}
    <link rel="stylesheet" href="{{asset('source-code/owl.carousel/dist/assets/owl.theme.default.min.css')}}">

    {{-- jquery js --}}
    <script src="{{asset('source-code/jquery/dist/jquery.min.js')}}" type="application/javascript"></script>

    {{-- owl carousel js --}}
    <script src="{{asset('source-code/owl.carousel/dist/owl.carousel.min.js')}}" type="application/javascript"></script>

    {{-- style sheet --}}
    @vite('resources/scss/styles.scss')

    {{-- app js --}}
    @vite('resources/js/front/app.js')

</head>

    <body class="front-portal">

        <div id="app"></div>

        <script type="application/javascript">

            window.core = {
                APP_NAME: 'Hospital',
                APP_URL: '{{env('APP_URL')}}'
            };
        </script>

    </body>

</html>
