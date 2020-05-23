<!DOCTYPE html>
<html>
<head>
	<title>HomePage</title>
	<link rel="stylesheet" type="text/css" href="css/headerStyle.css">
	<link rel="stylesheet" type="text/css" href="css/navbar.css">
	<link rel="stylesheet" type="text/css" href="css/main.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
	<script src="../ckeditor.js"></script>
</head>
<body>
	<header id="header" class="row m-0 bg-light border-bottom">
		<section class="col-2 pt-2">
			<object id="logo" class="h40 w40 align-middle" data="logo/logo.svg" type="image/svg+xml">
			  <img src="/logo/logo.png" />
			</object>
			<h1 class="h40 align-middle d-inline text-muted">Work Editor</h1>
		</section>
	</header>
	<section class="m-4">
		<textarea name="editor1" id="editor1" rows="10" cols="80">
            This is my textarea to be replaced with CKEditor.
        </textarea>
	</section>
	<script>
        // Replace the <textarea id="editor1"> with a CKEditor
        // instance, using default configuration.
        CKEDITOR.replace( 'editor1' );
    </script>
</body>
</html>