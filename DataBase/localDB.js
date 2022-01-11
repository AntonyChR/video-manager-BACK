const fs = require('fs');

const saveData = ( pathFile, data ) => {
    fs.writeFileSync(pathFile, JSON.stringify(data));
}

const loadData= (pathFile) =>{

    if(!fs.existsSync(pathFile)) return null;
  
    const data =JSON.parse(fs.readFileSync(pathFile, {encoding: 'utf-8'}));
    const keys = Object.keys(data);
    let dataNull = 0;
    if(keys.length > 0){
        for(let movieId of keys){
            if(!data[movieId].title) {
                dataNull++; 
                delete data[movieId]
            }
        }
    }

    return {
        data,
        dataNull
    }
}

module.exports = {
    saveData,
    loadData
}
