class ObjectManipulator {
    constructor() {
        this.objects = [];
    }

    addObject(obj) {
        this.objects.push(obj);
    }

    removeObject(obj) {
        this.objects = this.objects.filter(o => o !== obj);
    }

    getObjectCount() {
        return this.objects.length;
    }

    printobject() {
        this.objects.forEach(obj => {
            console.log(obj); 
        });
    }
}

const manipulator = new ObjectManipulator();

const obj1 = { name: 'Object 1' };
const obj2 = { name: 'Object 2' };

manipulator.addObject(obj1);
manipulator.addObject(obj2);

console.log(manipulator.getObjectCount());

manipulator.removeObject(obj2);

console.log(manipulator.getObjectCount());

manipulator.printobject(); 