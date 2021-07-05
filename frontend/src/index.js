document.addEventListener('DOMContentLoaded', function() {
    Creature.fetchCreatures()
    makeACreature.addEventListener("submit", Creature.submitCreature)

})
