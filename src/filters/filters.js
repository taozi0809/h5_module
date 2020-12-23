const timestampToStr = (value,type='yyyy-mm-dd hh:mm:ss') =>{

    if(!!value){
        var date = new Date(value*1);
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? ('0' + m) : m;
        var d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        var h = date.getHours();
        h = h < 10 ? ('0' + h) : h;
        var minute = date.getMinutes();
        var second = date.getSeconds();
        minute = minute < 10 ? ('0' + minute) : minute;
        second = second < 10 ? ('0' + second) : second;
        switch (type) {
            case 'yyyy-mm':
                return y+'-'+m
                break;
            case 'yyyy-mm-dd':
                return y+'-'+m+'-'+d
                break;
            case 'yyyy-mm-dd hh:mm':
                return y+'-'+m+'-'+d+' '+h+':'+minute
                break;
            case 'yyyy-mm-dd hh:mm:ss':
                return y+'-'+m+'-'+d+' '+h+':'+minute+':'+second
                break;
        }

    }
}
const strToTimestamp = (value) =>{
    if(!!value){
        value=value.replace(/-/g,'/')
        let timestamp = new Date(value).getTime()
        return timestamp
    }
}

export {timestampToStr,strToTimestamp}
