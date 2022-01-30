$(document).ready(function(){
    //지구이미지 웹요소(노드) 찾아서 저장
    var $earth = $("#earth");
    //버튼에 이벤트 등록
    $('#btnStart').click(function(){
        $earth.animate({
            left: "480px"
        }, 5000);
    })
})