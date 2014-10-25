function ListCtrl($scope) {
    $scope.testVal = "it just a test";
    $scope.imgList = [
        {desc: "test", title: "test", src: "/tmp/1.jpg", linkto: "http://www.baidu.com", price: 100},
        {desc: "test", title: "test", src: "/tmp/1.jpg", linkto: "http://www.baidu.com", price: 100},
        {desc: "test", title: "test", src: "/tmp/1.jpg", linkto: "http://www.baidu.com", price: 100},
        {desc: "test", title: "test", src: "/tmp/1.jpg", linkto: "http://www.baidu.com", price: 100},
        {desc: "test", title: "test", src: "/tmp/1.jpg", linkto: "http://www.baidu.com", price: 100},
        {desc: "test", title: "test", src: "/tmp/1.jpg", linkto: "http://www.baidu.com", price: 100},
        {desc: "test", title: "test", src: "/tmp/1.jpg", linkto: "http://www.baidu.com", price: 100},
        {desc: "test", title: "test", src: "/tmp/1.jpg", linkto: "http://www.baidu.com", price: 100},
        {desc: "test", title: "test", src: "/tmp/1.jpg", linkto: "http://www.baidu.com", price: 100},
        {desc: "test", title: "test", src: "/tmp/1.jpg", linkto: "http://www.baidu.com", price: 100},
        {desc: "test", title: "test", src: "/tmp/1.jpg", linkto: "http://www.baidu.com", price: 100},
        {desc: "test", title: "test", src: "/tmp/1.jpg", linkto: "http://www.baidu.com", price: 100},
        {desc: "test", title: "test", src: "/tmp/1.jpg", linkto: "http://www.baidu.com", price: 100},
        {desc: "test", title: "test", src: "/tmp/1.jpg", linkto: "http://www.baidu.com", price: 100}
    ];
    $scope.rowSize = 5;
    $scope.rows = range($scope.imgList.length / $scope.rowSize);
    $scope.cols = range($scope.rowSize);
}
