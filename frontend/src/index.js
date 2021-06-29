const skillsURL = "http://localhost:3000/skills"

const makeACreature = document.getElementById("makeacreature");
const enterCreatureName = document.querySelector(".creaturename");
const enterCreatureImage = document.querySelector(".creatureimage")
const enterCreatureDescription = document.querySelector(".creaturedescription")
const enterCreatureLikes = document.querySelector(".creaturelikes")
const card = document.querySelector(".card")

makeACreature.addEventListener("submit", Creature.submitCreature)
Creature.fetchCreatures()

const buttonSeven = document.querySelector(".seven")
const filterSeven = (e) => {
    const fSeven = Creature.returnAllCreatures().filter(c => c.name.includes("seven"))
    Creature.renderCreatures(fSeven)
}
buttonSeven.addEventListener("click", filterSeven)

const sortButton = document.querySelector(".sortlist")
const searchBox = (e) => {
    const listOfName = Creature.returnAllCreatures();
    listOfName.sort(
        function(a, b){
            let nameA = a.name;
            let nameB = b.name;
            if (nameA > nameB) {
                return -1;
            }
            if (nameA < nameB) {
                return 1;
            }
            return 0;
        }
    )
    Creature.renderCreatures(listOfName);
}
sortButton.addEventListener("click", searchBox)

const searchBar = document.querySelector('.searchBox');
// console.log(searchBar)
searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    console.log(searchString)
    const filteredCreatures = Creature.returnAllCreatures().filter(c =>
        c.name.toLowerCase().includes(searchString)
    );
    // console.log(Creature.returnAllCreatures())
    // console.log(filteredCreatures)
    Creature.renderCreatures(filteredCreatures)
});

const searchBarTwo = document.querySelector(".searchBoxTwo")
const searchCreatureName = (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredCreatures = Creature.returnAllCreatures().filter(c =>
        c.name.includes(searchString)
    )
    Creature.renderCreatures(filteredCreatures)
}
searchBarTwo.addEventListener("keyup", searchCreatureName)

const searchBarThree = document.querySelector(".searchBarThree")
const findCreatureName = (e) => {
    const searchString = e.target.value.toLowerCase();
    const findCreature = Creature.returnAllCreatures().filter(c => c.name.toLowerCase().includes(searchString))
    Creature.renderCreatures(findCreature)
}
searchBarThree.addEventListener('keyup', findCreatureName)


