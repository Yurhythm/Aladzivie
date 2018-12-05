<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Aladzivie</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <link rel="stylesheet" href="{{ asset('/css/app.css') }}"/>
    <link rel="stylesheet" href="{{ asset('/css/kustom.css') }}">
    <link rel="stylesheet" href="{{ asset('/font-awesome/css/font-awesome.css') }}">
    <meta name="_token" content="{{ csrf_token() }}" />
    <link href="https://fonts.googleapis.com/css?family=Aclonica" rel="stylesheet">
</head>
<body style="overflow-x:hidden;">
    <div id="app">
        <main-app></main-app>
    </div>
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>