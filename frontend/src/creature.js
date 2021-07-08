const creaturesURL = "http://localhost:3000/creatures"
const makeACreature = document.getElementById("makeacreature");

class Creature {

    static allCreatures = []

    constructor(creature){
        this.id = creature.id
        this.name = creature.attributes.name
        this.image = creature.attributes.image
        this.description = creature.attributes.description
        this.likes = creature.attributes.likes
        this.skills = creature.attributes.skills
        Creature.allCreatures.push(this)
        this.renderCreature()
    }

    static returnAllCreatures = () => {
        return this.allCreatures
    }

    static renderCreatures = (creatures) => {
        const card = document.getElementsByClassName("card")
        card.innerHTML = ""
        for(let creature of creatures){
            creature.renderCreature()
        }
    }

    static fetchCreatures= () => {
            fetch(creaturesURL)
            .then(response => response.json())
            .then(creatures => {
                for( let creature of creatures.data){
                    let newCreatureCard = new Creature(creature)
                }
            })
    }


    renderCreature = () => {
        // Creature Li
        const creatureLi = document.createElement('li')
        creatureLi.dataset.id = this.id
        // Header
        const h2 = document.createElement('h2')
        h2.innerText = this.name
        // Image
        const img = document.createElement('img')
        img.src = this.image
        img.width = 200
        // Paragraph
        const p = document.createElement('p')
        p.innerText = this.description
        // Creature Skills
        const creaturesSkills = document.createElement('ul')
        creaturesSkills.dataset.id = this.id
        // Creature Card
        const card = document.querySelector(".card")
        card.appendChild(creatureLi)
        // Like Button
        const likeCount = document.createElement('p')
        likeCount.innerText = this.likes
        const likeButton = document.createElement('button')
        likeButton.innerText = "Like"
        likeButton.addEventListener("click", this.addLikes)
        // Delete Buttom
        const deleteButton = document.createElement('button')
        deleteButton.innerText = "Delete"
        deleteButton.addEventListener("click", this.deleteCreature)
        // Skill Form
        const skillForm = document.createElement('form')
        skillForm.innerHTML =`
        <input type="text" placeholder="Add Skill">
        <input type="submit">
        `
        skillForm.addEventListener("submit", Skill.createSkill)
        this.skills.forEach(skill => {
            let newSkill = new Skill(skill)
            newSkill.renderSkill(creaturesSkills)
        })
        // Append Everything
        creatureLi.append(h2, img, p, creaturesSkills, skillForm, likeCount, likeButton, deleteButton)
    }

    static submitCreature = (e) => {
        e.preventDefault()
            const enterCreatureName = document.querySelector(".creaturename")
            const enterCreatureImage = document.querySelector(".creatureimage")
            const enterCreatureDescription = document.querySelector(".creaturedescription")
            const enterCreatureLikes = document.querySelector(".creaturelikes")
            const card = document.querySelector(".card")
        fetch(creaturesURL, {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
                "Accept":"application/json",
            },
            body: JSON.stringify({
                name: enterCreatureName.value,
                image: enterCreatureImage.value,
                description: enterCreatureDescription.value,
                likes: enterCreatureLikes.value
            })
        })
        .then(res => res.json())
        .then(creature => {
            let newCreature = new Creature(creature.data)
            makeACreature.reset()
        })
    }
    
    deleteCreature () {
        const creatureId = this.parentElement.dataset.id
        fetch(`${creaturesURL}/${creatureId}`,{
            method:"DELETE"
        })
        this.parentElement.remove()
    }

    addLikes(e){
        e.preventDefault()
        let more = parseInt(e.target.previousElementSibling.innerText) + 1
        const creatureId = this.parentElement.dataset.id
        // console.log(e.target.previousElementSibling)
        fetch(`${creaturesURL}/${creatureId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                "likes": more
            })
            })
            .then(res => res.json())
            .then((like_obj => {
                e.target.previousElementSibling.innerText = `${more} likes`;
        }))
    }

}