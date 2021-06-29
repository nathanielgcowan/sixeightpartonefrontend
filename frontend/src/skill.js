
class Skill {

    constructor(skill){
        this.id = skill.id
        this.name = skill.name
        this.creature_id = skill.creature_id
    }

    static createSkill(event){
        event.preventDefault()
        const li = document.createElement('li')
        const skillName = event.target.children[0].value
        console.log(event.target.children[0].value)
        const creaturesSkills = event.target.previousElementSibling
        // console.log(creaturesSkills)
        const creatureId = event.target.parentElement.dataset.id
        // console.log(event.target.parentElement.dataset.id)
        Skill.submitSkill(skillName, creaturesSkills, creatureId)
        event.target.reset()
    }

    renderSkill(creaturesSkills){
        const li = document.createElement('li')
        // console.log(li)
        const deleteButton = document.createElement('button')
        // console.log(deleteButton)
        deleteButton.innerText = "Delete"
        li.dataset.id = this.id
        // console.log(li.dataset.id)
        li.innerText = this.name
        // console.log(li.innerText)
        // console.log(li.innerHTML)
        li.append(deleteButton)
        deleteButton.addEventListener("click", this.deleteSkill)
        creaturesSkills.appendChild(li)
    }

    static submitSkill(skillName, creaturesSkills, creatureId){
        fetch(skillsURL, {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
                "Accept":"application/json",
            },
            body: JSON.stringify({
                name: skillName,
                creature_id: creatureId,
                creaturesSkills: creaturesSkills
            })
        })
        .then(response => response.json())
        .then(function(skill){
            let newSkill = new Skill(skill);
            const creature = Creature.allCreatures.find(creature => parseInt(creature.id) === newSkill.creature_id);
            creature.skills.push(this);
            newSkill.renderSkill(creaturesSkills);
        })
    }
    
    deleteSkill(){
        const skillId = this.parentElement.dataset.id
        fetch(`${skillsURL}/${skillId}`,{
            method: "DELETE"
        })
        this.parentElement.remove()
    }
}