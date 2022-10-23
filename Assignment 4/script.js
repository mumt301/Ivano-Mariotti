let btnGet = document.querySelector('button');
let myTable = document.querySelector('#table');
let employees = [
    { Filename: 'MP3/96', Compressionalgorithm: 'MP3', Bitrate: '96kbps', Originalsize: '4.5 MB', Compressedsize: '313 KB',Compressionratio:'.069', linkoriginal: el_up.innerHTML = "Click on button to generate" + "a link using JavaScript.", linkcompressed: 'x', linkresidual: 'x'},
    { Filename: 'MP3/320', Compressionalgorithm: 'MP3', Bitrate: '320kbps', Originalsize: '4.5 MB', Compressedsize: '1 MB',Compressionratio:'.222', linkoriginal:'x', linkcompressed: 'x', linkresidual: 'x'},
    { Filename: 'Vorbis/Low', Compressionalgorithm: 'Vorbis', Bitrate: 'Low', Originalsize: '4.5 MB', Compressedsize: '341 KB',Compressionratio:'.075', linkoriginal:'x', linkcompressed: 'x', linkresidual: 'x'},
    { Filename: 'Vorbis/High', Compressionalgorithm: 'Vorbis', Bitrate: 'High', Originalsize: '4.5 MB', Compressedsize: '1.3 MB',Compressionratio:'.288', linkoriginal:'x', linkcompressed: 'x', linkresidual: 'x'},
    { Filename: 'AAC/96', Compressionalgorithm: 'AAC', Bitrate: '96kbps', Originalsize: '4.5 MB', Compressedsize: '207 KB',Compressionratio:'.046', linkoriginal:'x', linkcompressed: 'x', linkresidual: 'x'},
    { Filename: 'AAC/320', Compressionalgorithm: 'AAC', Bitrate: '320kbps', Originalsize: '4.5 MB', Compressedsize: '413 KB',Compressionratio:'.091', linkoriginal:'x', linkcompressed: 'x', linkresidual: 'x'},
    { Filename: 'M4A/Low', Compressionalgorithm: 'M4A', Bitrate: 'low', Originalsize: '4.5 MB', Compressedsize: '367 KB',Compressionratio:'.081', linkoriginal:'x', linkcompressed: 'x', linkresidual: 'x'},
    { Filename: 'M4A/High', Compressionalgorithm: 'M4A', Bitrate: 'high', Originalsize: '4.5 MB', Compressedsize: '1.1 MB',Compressionratio:'.244', linkoriginal:'x', linkcompressed: 'x', linkresidual: 'x'},

]
let headers = ['Filename', 'Compression algorithm', 'Bit-rate', 'Original size',
'Compressed size','Compression ratio', 'Link to original', 'Link to compressed',
'Link to residual'];
btnGet.addEventListener('click', () => {
    let table = document.createElement('table');
    let headerRow = document.createElement('tr');
    headers.forEach(headerText => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });
    table.appendChild(headerRow);
    employees.forEach(emp => {
        let row = document.createElement('tr');
        Object.values(emp).forEach(text => {
            let cell = document.createElement('td');
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
            })
        table.appendChild(row);
        });
    myTable.appendChild(table);
    });
