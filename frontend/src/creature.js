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
        const creatureLi = document.createElement('li')
        const h2 = document.createElement('h2')
        const img = document.createElement('img')
        const p = document.createElement('p')
        const creaturesSkills = document.createElement('ul')
        const card = document.querySelector(".card")


        const likeCount = document.createElement('p')
        const likeButton = document.createElement('button')

        const deleteButton = document.createElement('button')
        const skillForm = document.createElement('form')
        creatureLi.dataset.id = this.id
        card.appendChild(creatureLi)
        h2.innerText = this.name
        img.src = this.image
        img.width = 200
        p.innerText = this.description
        likeCount.innerText = this.likes
        likeButton.innerText = "Like"
        likeButton.addEventListener("click", this.addLikes)
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