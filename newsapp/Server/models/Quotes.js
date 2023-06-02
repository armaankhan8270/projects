module.exports=(sequelize,DataTypes)=>{
    const Quotes=sequelize.define("Quotes",{
        quote:{
            type:DataTypes.STRING,
            allowNull:false
        },
        book:{
            type:DataTypes.STRING,
            allowNull:false
        },
        auther:{
            type:DataTypes.STRING,
            allowNull:false
        },
        user:{
            type:DataTypes.STRING,
            allowNull:false
        },
    })
    return Quotes
    }