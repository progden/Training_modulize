/**
 * Created by progden on 2017/7/11.
 */
exports.add = function(){
    var sum = 0,
        i = 0,
        args = arguments,
        l = args.length;
    while(i < l){
        sum += args[i++];
    }
    return sum;
}