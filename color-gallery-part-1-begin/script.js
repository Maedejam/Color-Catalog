/* <div class="color" title="">
        <div class="block" style="background-color: red;"></div>
        <div class="label">red</div>
    </div> */

'Use strickt'

const createBlock= function(color){
    const block = document.createElement('div')
    block.classList.add('block')
    block.style.backgroundColor = color;

    return block
}

const createLabel = function(color) {
    const label = document.createElement('div')
    label.classList.add('label');
    label.textContent = color;

    return label
}

const createColor = function(color,hex){
    const coloring = document.createElement('div')
    coloring.classList.add('color')
    coloring.title = hex

    coloring.append(createBlock(color),createLabel(color))

    return coloring
}

const createGallery = function (colors){
    const gallery = document.getElementById('gallery')

    for(let color in colors){
        gallery.append(createColor(color,colors[color]))
    }
}

createGallery(colors);