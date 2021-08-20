function $(selector) {
    let elem;
    if (typeof selector === 'string') {
        elem = document.querySelectorAll(selector)
    }else if (selector instanceof HTMLElement) {
        elem = [selector]
    }
    return new JQ(elem)
  }

  function JQ(params) {
      this.elem = params
      this.on = function (event,callBackFn) {  
          for (let i = 0; i < this.elem.length; i++) {
              this.elem[i].addEventListener(event,callBackFn)
          }
          return this
      }
      this.html = function (html) {
          if (typeof html === 'string' || typeof html === 'number') {
              for (let i = 0; i < this.elem.length; i++) {
                  this.elem[i].innerHTML = html
              }
          }else if (html === undefined) {
              return this.elem[0].innerHTML
          }
        }
        this.css = function (styleName, value) {
            if (typeof styleName === 'string' && (typeof value === 'string' || typeof value === 'number')) {
                for (let i = 0; i < this.elem.length; i++) {
                    this.elem[i].style = `${styleName}:${value}`
                }
            } else if (typeof styleName === 'object') {
                for (let i = 0; i < this.elem.length; i++) {
                    for (const key in styleName) {
                        this.elem[i].style[key] = styleName[key]
                    }
    
                }
            }
            return this
        }
        this.toggleClass = function (nameClass) {
            if (typeof nameClass === 'string') {
                for (let i = 0; i < this.elem.length; i++) {
                    if (this.elem[i].classList.contains(nameClass)) {
                        this.elem[i].classList.remove(nameClass)
                    }else{
                        this.elem[i].classList.add(nameClass)
                    }
                    
                }
            }
            return this
          }
        this.height =  function (size) { 
        if (typeof size === 'string') {
            for (let i = 0; i < this.elem.length; i++) {
                this.css({
                    height: size
                })
            }
          }
        }
        this.hover = function (mouseoverFn,mouseoutFn) {
            if (typeof mouseoverFn === 'function' && typeof mouseoutFn === 'function') {
                this.on('mouseover',mouseoverFn)
                this.on('mouseout',mouseoutFn)
            }
            return this
          } 
          this.dblclick = function (callBackFn) {
            if (typeof callBackFn === 'function') {
                this.on('dblclick',callBackFn)
            }
            return this
          } 
        this.attr = function (attrName,value) {
            if (typeof attrName === 'string' && (typeof value === 'string' || value === 'number')) {
                for (let i = 0; i < this.elem.length; i++) {
                    this.elem[i].setAttribute(attrName,value)
   
                }
            }else if (typeof attName === 'object') {
                for (let i = 0; i < this.elem.length; i++) {
                    for (const key in attrName) {
                       this.elem[i].setAttribute(key,attrName[key])
                    }
                    
                }
            }
            return this
          }
          
        this.removeAttr = function (attrName) {
            if (typeof attrName === 'string') {
                for (let i = 0; i < this.elem.length; i++) {
                    this.elem[i].removeAttribute(attrName)
                    
                }
            }
            return this
          }
    }
   