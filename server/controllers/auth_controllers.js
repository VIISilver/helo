module.exports = {
    
        createUser: (req, res, next) => {
            const db = req.app.get('db');
            const { first_name, last_name, gender, haircolor, eye_color, hobby, bday_day, bday_month, bday_year } = req.body;
    
            db.create_user([first_name, last_name, gender, haircolor, eye_color, hobby, bday_day, bday_month, bday_year])
            .then( () => res.status(200).send())
            .catch( () => res.status(500).send());
        }
    };