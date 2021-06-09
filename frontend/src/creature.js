class Creature {

    static allCreatures = []

    constructor(creature){
        this.id = creature.id
        this.name = creature.attributes.name
        this.image = creature.attributes.image
        this.description = creature.attributes.description
        this.skills = creature.attributes.skills
        Creature.allCreatures.push(this)
        this.renderCreature()
    }

    static renderCreatures(creatures){
        card.innerHTML = ""
        for(let c of creatures){
            c.renderCreature()
        }
    }

    static fetchCreatures(){
        fetch(creaturesURL)
        .then(response => response.json())
        .then(creatures => {
            for( let c of creatures.data){
                let newCreatureCard = new Creature(c)
            }
        })
    }

    renderCreature(){
        const creatureLi = document.createElement('li')
        const h2 = document.createElement('h2')
        const img = document.createElement('img')
        const p = document.createElement('p')
        const creaturesSkills = document.createElement('ul')
        const deleteButton = document.createElement('button')
        const skillForm = document.createElement('form')
        creatureLi.dataset.id = this.id
        card.appendChild(creatureLi)
        h2.innerText = this.name
        img.src = this.image
        p.innerText = this.description
        deleteButton.innerText = "Delete"
        deleteButton.addEventListener("click", this.deleteCreature)
        skillForm.innerHTML =`
        <input type="text" placeholder="Add Skill">
        <input type="submit">
        `
        skillForm.addEventListener("submit", Skill.createSkill)
        creaturesSkills.dataset.id = this.id
        this.skills.forEach(skill => {
            let newSkill = new Skill(skill)
            newSkill.renderSkill(creaturesSkills)
        })
        creatureLi.append(h2, img, p, creaturesSkills, skillForm, deleteButton)
    }

    static submitCreature(event){
        event.preventDefault()
        fetch(creaturesURL, {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
                "Accept":"application/json",
            },
            body: JSON.stringify({
                name: enterCreatureName.value,
                image: enterCreatureImage.value,
                description: enterCreatureDescription.value
            })
        })
        .then(res => res.json())
        .then(creature => {
            let newCreature = new Creature(creature.data)
            makeACreature.reset()
        })
    }
    deleteCreature(){
        const creatureId = this.parentElement.dataset.id
        fetch(`${creaturesURL}/${creatureId}`,{
            method:"DELETE"
        })
        this.parentElement.remove()
    }
}