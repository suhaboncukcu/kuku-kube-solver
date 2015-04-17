function h() {
    $arr = $('#box span');
    $k = $('#box span:nth-child(1)').css('background-color');
    $count = 0;
    $tmp =0;
    for(var $i =1; $i<= $arr.length; $i++) {
        $fc = $('#box span:nth-child('+$i+')').css('background-color');
        if($fc == $k) {
            $count++;
        } else {
            $m = $fc;
            $tmp = $i;
        }
    }

    if($count <= 1) {
        $tmp = 1;
    }


    $('#box span:nth-child('+$tmp+')').css('background-color','white');
    $('#box span:nth-child('+$tmp+')').attr('id','thing');
    $('#thing').click();
}

setInterval(function(){ h(); }, 1);


//oneliner for especially visible class
setInterval(function(){ $('#box:visible span').trigger('click'); }, 3);
