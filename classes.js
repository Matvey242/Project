class burger {
    filterFav(){
        const elements = document.querySelectorAll('.heart1')
        return elements
    }

    filterSel(){
        const elements1 = document.querySelectorAll('.special1')
        return elements1
    }

    filterHome(){
    const b1 = document.querySelector('.b1')
    const b2 = document.querySelector('.b2')
    const b3 = document.querySelector('.b3')
    const b4 = document.querySelector('.b4')
    return [b1, b2, b3, b4].filter(el => el !== null)
    }
}

export default burger

