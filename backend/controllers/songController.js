const mysql = require('mysql');

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DB_NAME
});

connection.connect();

exports.getSongDetail=[
  (req, res)=>{
    console.log(req.params);

    connection.query('SELECT name FROM songs WHERE id =' + connection.escape(req.params.idSong), (err, rows, fields)=>{
      if(err) throw err;
      console.log(rows[0].name)
      return res.status(200).json(rows);
    });

    //connection.end();
  }
];

exports.getAllSongs=[
  (request, response)=>{
    console.log("GET /v1/song");
    console.log(request.query);
    connection.query('SELECT * FROM songs', (err, rows, fields)=>{
      if(err) throw err;
      return response.status(200).json(rows);
    });
    //console.log(request.query.query);
    //console.log(request.query.user_age);
    /*
    if(request.query.user_age < 18){
      return response.status(200).json({age_verification:false});
    }
    return response.status(200).json(songCollection)
    */
  } 
];

exports.createSong=[
  (req, res)=>{
    console.log("POST /v1/song");
    console.log(req.body);
    let song_name = req.body.name;
    // Guardar nueva canción
    //songCollection.push({id:req.body.id_song, name:req.body.song_name});
    connection.query('INSERT INTO songs (name, id_artist) VALUES (?, ?)', [song_name, req.body.id_artist],(err, rows, fields)=>{
      res.status(200).json(rows);
    })
  }
];

exports.deleteSong=[
  (req, res)=>{
    console.log("DELETE /v1/song");
    // Borrar canción
    res.status(200).json({deleted_song: true});
  }
]
