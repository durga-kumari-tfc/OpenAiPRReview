<!DOCTYPE html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<body>

<div ng-app="" ng-init="quantity=1;cost=5">
    <p>Total in dollar test: {{ quantity * cost }}</p>
</div>

<div ng-app="" ng-init="firstName='Durga';lastName='T'">

    <p>The full name is: {{ firstName + " " + lastName }}</p>

</div>



</body>
</html>
