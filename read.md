Hi, this is my document about what i think is different from class and function.
    * In class, every function, every variable is not define with the key word(let, const, var ...) will define to global object.
    and if you want to use it, you must use the key word 'this' before to use.
    * In function, above thing is not. you want to use function, variable that you already created, just call it.

    * In class, you must use the STATE to do everything async/In function, you must use the HOOK

This is the different from STATE/ HOOK
    *State:
        - to use it: this.state.nameOfVariable
        - to set it: this.setState({},function)//this.setState get 2 arguments: 1 object, and 1 function
        - after setState, dom will render again.
        - to creat State: define it in contructor.
            contructor(props){
                super(props)
                this.state ={
                    ...
                }
            }
    *HOOK:
        - create it: with one variable, you must have one method to set this variable
            [thanh, setThanh]= useState('');//thanh is variable, and setThanh is method to change the value of Thanh.
        - variable is likely a const variable, you can call it everywhere in your app (app is a function app).
        - to set variable, just call the method of this variable.
        - likely this.setState, when you change variable and want to do a function after this, just use :useEffect()
        