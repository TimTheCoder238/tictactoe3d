export default function checkpossibilities(boardArray, updateSize) {
			
    //[1,2,3,4,5,6,7,8,9]
    var blockStart = 0
    var blockEnd = updateSize
    let lastPosition = []

    let test = false

    let lignes = []
    let colonnes = []
    let diags = []
    //For each lines
    for (let i = 0; i < updateSize; i++) {
        lastPosition = []
        //For each buttons
        for (let j = blockStart; j < blockEnd; j++) {
            // console.log(boardArray[j])
            
            
            if(boardArray[j] === null){
                test = true
            } else {
                lastPosition.push(boardArray[j])
                if(lastPosition.length > 1){
                    if(lastPosition[0] === boardArray[j]){
                        test = true
                    }else {
                        test = false
                    }
                } else {
                    //Si c est la 1ere valeur sur la lignes
                    test = true
                }
            }
            
            // console.log(test)
            if(!test){
            // 	//Si le test est false on arrete car on sait que 2valeurs diff sont présentes sur la lignes
                break
                //[false, true, true]
            }

        }
        
        //car Les 3 première fois on est sur la 1ere ligne
        lignes.push(test)
        
        blockStart += updateSize
        blockEnd += updateSize
    }

    //[false, true, true]
    //Test si les 3 lignes sont a true
    let testLignes = 0
    for (let i = 0; i < lignes.length; i++) {
        if(!lignes[i]){
            testLignes++
        }
    }
    if(testLignes === updateSize){
        //On sait que plus de possibilité sur aucune lignes
    }
    // console.log(lignes)
    // console.log(testLignes)
    
    

    //Ensuite checker pour les colonnes
    // return ligne

    blockStart = 0
    blockEnd = updateSize * updateSize - 2
    test = false
    //[1,2,3,4,5,6,7,8,9]
    //[1,2,3,4, 5,6,7,8,  9,10,11,12,   13,14,15,16]

    //For each columns
    for (let i = 0; i < updateSize; i++) {
        lastPosition = []
        //For each buttons
        for (let j = blockStart; j < blockEnd; j += updateSize) {
            // console.log(boardArray[j])
            
            
            if(boardArray[j] === null){
                test = true
            } else {
                lastPosition.push(boardArray[j])
                if(lastPosition.length > 1){
                    if(lastPosition[0] === boardArray[j]){
                        test = true
                    }else {
                        test = false
                    }
                } else {
                    //Si c est la 1ere valeur sur la ligne
                    test = true
                }
            }
            
            // console.log(test)
            if(!test){
            // 	//Si le test est false on arrete car on sait que 2valeurs diff sont présentes sur la ligne
                break
                //[false, true, true]
            }
            
        }

        //car Les 3 première fois on est sur la 1ere colonne
        colonnes.push(test)
        
        blockStart += 1
        blockEnd += 1
    }

    
    //[false, true, true]
    //Test si les 3 colonnes sont a true
    let testColonnes = 0
    for (let i = 0; i < colonnes.length; i++) {
        if(!colonnes[i]){
            testColonnes++
        }
    }
    if(testColonnes === updateSize){
        //On sait que plus de possibilité sur aucune colonnes
    }
    // console.log(colonnes)
    // console.log(testColonnes)


    blockStart = 0
    blockEnd = updateSize * updateSize
    let increment = updateSize + 1
    test = false
    // //[1,2,3,4,5,6,7,8,9]
    // //[0,4,8]
    // //[6,4,2]
    // //[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    // //[0,4,8]
    // //[6,4,2]
    // //For each diags
    for (let i = 0; i < 2; i++) {
        lastPosition = []
        for (let j = blockStart; j < blockEnd; j += increment) {
            // console.log(boardArray[j])
            
            
            if(boardArray[j] === null){
                test = true
            } else {
                lastPosition.push(boardArray[j])
                if(lastPosition.length > 1){
                    if(lastPosition[0] === boardArray[j]){
                        test = true
                    }else {
                        test = false
                    }
                } else {
                    //Si c est la 1ere valeur sur la ligne
                    test = true
                }
            }
            
            // console.log(test)
            if(!test){
            // 	//Si le test est false on arrete car on sait que 2valeurs diff sont présentes sur la ligne
                break
                //[false, true, true]
            }
            
            
        }
        
        diags.push(test)

        blockStart = updateSize - 1
        blockEnd = updateSize * updateSize - 2
        increment = updateSize - 1 //0 4 8 2 4 6, or 3,6,9,12
    }

    //[false, true, true]
    //Test si les 3 colonnes sont a true
    let testDiags = 0
    for (let i = 0; i < diags.length; i++) {
        if(!diags[i]){
            testDiags++
        }
    }
    if(testDiags === 2){
        //On sait que plus de possibilité sur aucune diags
    }
    // console.log(diags)
    // console.log(testDiags)

    //Les 3 checks
    if(testLignes === updateSize && testColonnes === updateSize && testDiags === 2){
        return false
    } else {
        return true
    }

}