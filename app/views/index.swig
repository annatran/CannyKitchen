{% extends 'layout.swig' %}
{% block content %}
    <!-- Navigation -->
    <nav class="navbar navbar-default navbar-custom navbar-fixed-top">
        <div class="container">
            <div class="navbar-header page-scroll">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse1">
                    <!-- Create "hamburger" icon to access menu (mobile) -->
                    <span class="sr-only">Toggle Navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="/">CannyKitchen</a>
            </div>

            <div class="collapse navbar-collapse" id="navbar-collapse1">
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="login">Login</a></li>
                    <!-- <li><a href="signup.html">Signup</a></li> -->
                </ul>
            </div>
        </div>
    </nav>

    {% block pageContent %}
        <div class="container main-container">
            <h1>
                CannyKitchen
            </h1>
            <p>
                Hmmm, it seems that you haven't a meal plan yet. Clicking below can remedy that!
            </p>
            <br />
            <a class="btn btn-default" href="/recipes/0/7">Generate Meal Plan!</a>
        </div>
    {% endblock %}

{% endblock %}
