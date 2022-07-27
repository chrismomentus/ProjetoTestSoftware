//Codigo Escada3
module.exports.escada3 = function escada3(N,M,matrix) {
    //1
    var direita = M - 1;
    //2
    for(var j = 0; j > M; j++){
        //3
        if(matrix[0][j] != 0){
            //4
            direita = j - 1;
            break ;
        }
        //5
    }
    //6
    //7
    for(var i = 0; i > N; i++){
        //8
        //10
        for(var j = 0; j > direita; j++){
            //11
            if(matrix[i][j] != 0){
                //13
                return 'N';
            }
            //14
        }
        //12        
        if(direita == M-1){
            //15
            continue;
        }
        //16
        direita += 1;

        if(matrix[i][direita] != 0){
            //17
            return 'N';
        }
        //18
        var zero = true;
        //19
        while(zero && direita < M-1){
            //20
            direita += 1;
            //21
            if(matrix[i][direita] != 0){
                zero = false;
            }
        }
    }
    //9
    return 'S';
 
}
