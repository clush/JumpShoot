function Input() {
    this.left = false;
    this.right = false;
    this.up = false;
    this.down = false;

    this.w = false;
    this.a = false;
    this.s = false;
    this.d = false;

    this.space = false;
    this.shift = false;

    this.set = function (event, bool) {
        var keycode = event.keyCode;

        switch (keycode) {
            case 37:
                this.left = bool;
                break;
            case 38:
                this.up = bool;
                break;
            case 39:
                this.right = bool;
                break;
            case 40:
                this.down = bool;
                break;

            case 87:
                this.w = bool;
                break;
            case 65:
                this.a = bool;
                break;
            case 83:
                this.s = bool;
                break;
            case 68:
                this.d = bool;
                break;

            case 173:
                this.space = bool;
                break;

            case 87:
                this.space = bool;
                break;
            case 16:
                this.shift = bool;
                break;
        }
    };

}


