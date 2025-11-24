<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Order Confirmation | Georgian Pizzeria</title>
        <meta name="author" content="Georgian Pizzeria LLC.">
        <meta name="description" content="Confirmation of your pizza order will appear here.">
        <link rel="stylesheet" href="styles.css" />
        <link rel="shortcut icon" href="images/favicon.png" type="image/x-icon">
    </head>
    <body>
        <header>
                <!--Wrapping the logo in the <a> tag will let you click it back to the index page (or reload if you're already on it.)-->
                <a href="index.html"><img alt="Georgian Pizzeria logo" src="images/logo.png" width="175" height="128"></a>
                <h1 h>Georgian Pizzeria</h1>
                <h2>Thanks for ordering at Georgian Pizzeria! Check out your order details below.</h3>
        </header>
        <!--Display order summary details outputting results of the form in a user friendly format.-->
        <main>
            <div class="order-summary">
            <h3>Order Summary</h3>
<?php
    // All php functions were found at https://www.php.net/manual/en/
    function formatText($text){
        /* 
        Get text and return it formmatted in title-case, accounting for hyphenated words
        The function 'ucwords()' takes two arguments, the text and separators.
        Making the separated 

        */ 
        return ucwords($text, ' -');
    }

    // Display all the information provided
    $quantity = $_GET['quantity'];
    echo('<p>Quantity: '.$quantity.'</p>');

    // For the text inputs that are not numbers, use the formatText() function to make it look user friendly
    $size = formatText($_GET['size']);
    echo('<p>Size: '.$size.'</p>');

    $shape = formatText($_GET['shape']);
    echo('<p>Shape: '.$shape.'</p>');

    $orderType = formatText($_GET['order-type']);
    echo('<p>Order Type: '.$orderType.'</p>');

    $toppings = $_GET['toppings'];

    // Check length with count() function
    $toppings_length = count($toppings);

    // If zero, we let the user know no toppings were selected
    if ($toppings_length == 0){
        echo('<p>No toppings selected.');
    }
    else {
        // array_map() will return a new array of toppings with each element replaced with what formatText(element) returns
        $formattedToppings = array_map('formatText', $toppings);
        // implode() joins an array with the provided string, so this function will return topping1, topping2, ... 
        $toppings_list = implode(', ', $formattedToppings);
        echo('<p>Toppings: '.$toppings_list.'</p>');
    }

    // Lastly, display the order instructions that were given
    $instructions = formatText($_GET['instructions']);
    echo('<p>Additional instructions:<br /><em>'.$instructions.'</em></p>');
?>
            </div>
        </main>
    <body>
</html>
