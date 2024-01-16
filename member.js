function skillsMember() {
    return {
        restrict: 'E',
        scope: {
        member: '='
        },
        templateUrl: 'app/components/skills/member.html',
        controller: function($scope, $element, $attrs) {
        $scope.$watch('member', function(member) {
            if (member) {
            $scope.member = member;
            }
        });
        }
    };

}