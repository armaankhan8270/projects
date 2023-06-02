module.exports=(sequelize,DataTypes)=>{

    const Post=sequelize.define("Posts",{
        title:{
            type:DataTypes.STRING,
            allowNull:false
        },
        text:{
            type:DataTypes.STRING,
            allowNull:false
        },
        username:{
            type:DataTypes.STRING,
            allowNull:false
        },
    })
    return Post

}