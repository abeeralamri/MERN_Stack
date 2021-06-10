import React from 'react';

const PetForm = ({formHandler, PetName, setPetName, PetType, setType, desc, setDesc, skill_1, setSkill_1,  skill_2, setSkill_2,  skill_3, setSkill_3}) => {

    
    return(

        <form style = {{textAlign : "center"}} onSubmit={formHandler}>
 
            <div  className="form-group">
                <span style = {{width : "400px", height :"80px" , margin : "auto", marginTop : "50px" , backgroundColor :"#F6F6F6"}}  className="input-group-text" >
                    <label style = {{ marginRight : "30px", color : "grey"}}>Pet Name</label>
                    <input style = {{marginTop : "5px"}} className = "col-sm-8" type="text" name = "PetName" onChange={(e)=> setPetName(e.target.value)} value={PetName}/>
                </span>
            </div>

            <div  className="form-group">
                <span style = {{width : "400px", height :"80px" , margin : "auto", marginTop : "50px" , backgroundColor :"#F6F6F6"}}  className="input-group-text" >
                    <label style = {{ marginRight : "30px", color : "grey"}}>Pet Type</label>
                    <input style = {{marginTop : "5px"}} className = "col-sm-8" type="text" name = "Type" onChange={(e)=> setType(e.target.value)} value={PetType}/>
                </span>
            </div>

            <div  className="form-group">
                <span style = {{width : "400px", height :"80px" , margin : "auto", marginTop : "50px" , backgroundColor :"#F6F6F6"}}  className="input-group-text" >
                    <label style = {{ marginRight : "30px", color : "grey"}}>Pet Description</label>
                    <input style = {{marginTop : "5px"}} className = "col-sm-8" type="text" name = "desc" onChange={(e)=> setDesc(e.target.value)} value={desc}/>
                </span>
            </div>



            <div>
                <p>Skills (Optional)</p>
            <div  className="form-group">
                <span style = {{width : "400px", height :"80px" , margin : "auto", marginTop : "50px" , backgroundColor :"#F6F6F6"}}  className="input-group-text" >
                    <label style = {{ marginRight : "30px", color : "grey"}}>Skill 1</label>
                    <input style = {{marginTop : "5px"}} className = "col-sm-8" type="text" name = "skill_1" onChange={(e)=> setSkill_1(e.target.value)} value={skill_1}/>
                </span>
            </div>

            <div  className="form-group">
                <span style = {{width : "400px", height :"80px" , margin : "auto", marginTop : "50px" , backgroundColor :"#F6F6F6"}}  className="input-group-text" >
                    <label style = {{ marginRight : "30px", color : "grey"}}>Skill 2</label>
                    <input style = {{marginTop : "5px"}} className = "col-sm-8" type="text" name = "skill_2" onChange={(e)=> setSkill_2(e.target.value)} value={skill_2}/>
                </span>
            </div>

            <div  className="form-group">
                <span style = {{width : "400px", height :"80px" , margin : "auto", marginTop : "50px" , backgroundColor :"#F6F6F6"}}  className="input-group-text" >
                    <label style = {{ marginRight : "30px", color : "grey"}}>Skill 3</label>
                    <input style = {{marginTop : "5px"}} className = "col-sm-8" type="text" name = "skill_3" onChange={(e)=> setSkill_3(e.target.value)} value={skill_3}/>
                </span>
            </div>
            
            </div>


            
            <button style = {{marginTop : "30px"}} type="submit" className="btn btn-primary">Sumbit</button>
            
            
        </form>
           
   
    )
}

export default PetForm;