var mutations = {
    // 收藏的增加
    shouceng(state,obj){
        this.state.shouc++
        // 对数组进行遍历
        let shouc = state.shoucenglist.some((val) => {
            // 如果点击的那个元素的id = obj.id 就返回
            return val.id === obj.id
        })
        // 如果 shouc = true，说明已经收藏过了，就返回，否则就添加
        if(shouc === true){
            return
        }else{
            this.state.shoucenglist.push(obj)
        }
        // console.log(obj)
        // console.log(this.state.shoucenglist)
    },
    // 删除收藏
    removesc(state,index){
        this.state.shoucenglist.splice(index,1)
        this.state.shouc--
    },

    // 购物车的增加
    gouwuc(state,obj){
        
        let gwc = state.data.some((val) => {
            return val.id === obj.id
        })
        if(gwc === true){
            return
        }else{
            this.state.cont++
            this.state.data.push(obj)
        }
        // console.log(state.data)
        // console.log(obj)
    },
    // 购物车的删除
    // 逐个删除
    removess(state,index){
        this.state.data.splice(index,1)
        this.state.cont--
    },
    // 全部删除
    quanremovess(state){
        this.state.data = []
        this.state.cont = 0
    }

}
export default mutations