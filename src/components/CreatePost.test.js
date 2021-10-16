const CreatePost = require("./CreatePost")

// @ponicode
describe("handleNameChange", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Edmond", "Pierre Edouard", "George"], ["Edmond", "Pierre Edouard", "Edmond"], ["Anas", "Pierre Edouard", "Pierre Edouard"]]
        inst = new CreatePost.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleNameChange({ target: { value: "elio@example.com" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.handleNameChange({ target: { value: "Dillenberg" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.handleNameChange({ target: { value: "Elio" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.handleNameChange(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("handleTitleChange", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Pierre Edouard", "George", "Pierre Edouard"], ["Anas", "Edmond", "Pierre Edouard"], ["Anas", "George", "George"]]
        inst = new CreatePost.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleTitleChange({ target: { value: "elio@example.com" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.handleTitleChange({ target: { value: "Elio" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.handleTitleChange({ target: { value: "Dillenberg" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.handleTitleChange(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("handleBlogChange", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Pierre Edouard", "Jean-Philippe", "Michael"], ["Jean-Philippe", "Jean-Philippe", "Michael"], ["Edmond", "Jean-Philippe", "Pierre Edouard"]]
        inst = new CreatePost.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleBlogChange({ target: { value: "elio@example.com" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.handleBlogChange({ target: { value: "Dillenberg" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.handleBlogChange({ target: { value: "Elio" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.handleBlogChange(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("handleSubmit", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Pierre Edouard", "Edmond", "Jean-Philippe"], ["Michael", "Michael", "George"], ["Anas", "George", "Pierre Edouard"]]
        inst = new CreatePost.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleSubmit({ preventDefault: () => false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.handleSubmit({ preventDefault: () => true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.handleSubmit(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
