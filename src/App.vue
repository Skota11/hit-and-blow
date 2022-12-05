<script lang="ts">
export default {
  data() {
    return {
      turn:1,
      block:[[],[],[],[],[],[],[],[]],
      com:["null"],
      color:["red", "blue", "yellow-green", "yellow", "pink", "white"],
      selection:1,
      old_selection:0
    }
  },
  mounted() {
    window.onload = ()=>{
      for (let i = 0; i < 4; i++) {
    this.com[i] = this.color[Math.floor(Math.random() * 6)];
  }
  (this.$refs[`1-1`] as any).className = "selection"
    }
},
  methods: {
    select_color(tmp:string){
      switch (tmp) {
        case "right":
          if(this.selection !== 4){
            this.old_selection = this.selection;
          this.selection++;
          break;
          }else{
            break;
          }
        case "left":
          if(this.selection !==1){
            this.old_selection = this.selection;
        this.selection--;
          break;
          }else{
            break;
          }
        default:
          (this.block[this.turn-1][this.selection-1] as any) = tmp;
          console.log(this.turn);
          console.log(this.selection);
          ((this.$refs[`${this.turn}-${this.selection}`]) as any ).innerHTML = `<img src="https://hit-and-brow.skota11.repl.co/${tmp}.svg"/>`
          if(this.selection !== 4){
            this.old_selection = this.selection;
          this.selection++;
          }
      }
    },
    selectok(){
      if(this.block[this.turn-1].length ==4){
        let hit = 0;
        let blow = 0;
        let alreadyhit = [];
        for (let index = 0; index < 4; index++) {
      if (this.com[index] == this.block[this.turn-1][index]) {
        hit++
        console.log(hit)
        alreadyhit.push(index)
      }
    }
    for (let index = 0; index < 4; index++) {
      if (this.com.includes(this.block[this.turn-1][index])) {
        if (!alreadyhit.includes(index)) {
          blow++;
          console.log(blow)
        }
      }
    }
    this.old_selection = this.selection;
    (this.$refs[`${this.turn}-result`] as any).textContent = `${hit}ヒット/${blow}ブロー`;
    this.turn++;
    (this.$refs[`${this.turn-1}-${this.old_selection}`] as any).className = "";
      (this.$refs[`${this.turn}-1`] as any).className = "selection"
    this.selection=1;
      }
    }
  },
  watch: {
    selection(new_select){
      (this.$refs[`${this.turn}-${this.old_selection}`] as any).className = "";
      (this.$refs[`${this.turn}-${new_select}`] as any).className = "selection";
    }
  }
}
</script>

<template>
  <div id="game">
        <p id="turn">{{turn}}ターン目/8</p>
        <div id="select">
                  <button class="btn btn-outline-dark " @click="select_color('red')">赤<img
    src="https://hit-and-brow.skota11.repl.co/red.svg" alt=""></button>
<button class="btn btn-outline-dark " @click="select_color('blue')">青<img
    src="https://hit-and-brow.skota11.repl.co/blue.svg" alt=""></button>
<button class="btn btn-outline-dark " @click="select_color('yellow-green')">黄緑<img
    src="https://hit-and-brow.skota11.repl.co/yellow-green.svg" alt=""></button>
<button class="btn btn-outline-dark " @click="select_color('yellow')">黄<img
    src="https://hit-and-brow.skota11.repl.co/yellow.svg" alt=""></button>
<button class="btn btn-outline-dark " @click="select_color('pink')">桃<img
    src="https://hit-and-brow.skota11.repl.co/pink.svg" alt=""></button>
<button class="btn btn-outline-dark " @click="select_color('white')">白<img
    src="https://hit-and-brow.skota11.repl.co/white.svg" alt=""></button>
<button value="bottom-0 start-0" class="btn btn-primary" @click="selectok()">決定</button>
                    <span>|</span>
                    <button @click="select_color('right')">→<img src="https://hit-and-brow.skota11.repl.co/right.svg"
                            alt=""></button>
                    <button @click="select_color('left')">←<img src="https://hit-and-brow.skota11.repl.co/left.svg"
                            alt=""></button>
                </div>
        <div id="table">
            <table border="1">
                <tbody>
                    <tr>
                        <th>ターン</th>
                        <td>A</td>
                        <td>B</td>
                        <td>C</td>
                        <td>D</td>
                        <td style="width:auto;">結果</td>
                    </tr>
                    <tr>
                        <th>1</th>
                        <td ref="1-1"></td>
                        <td ref="1-2"></td>
                        <td ref="1-3"></td>
                        <td ref="1-4"></td>
                        <td style="width:auto;" ref="1-result"></td>
                    </tr>

                    <tr>
                        <th>2</th>
                        <td ref="2-1"></td>
                        <td ref="2-2"></td>
                        <td ref="2-3"></td>
                        <td ref="2-4"></td>
                        <td style="width:auto;" ref="2-result"></td>
                    </tr>
                    <tr>
                        <th>3</th>
                        <td ref="3-1"></td>
                        <td ref="3-2"></td>
                        <td ref="3-3"></td>
                        <td ref="3-4"></td>
                        <td style="width:auto;" ref="3-result"></td>
                    </tr>

                    <tr>
                        <th>4</th>
                        <td ref="4-1"></td>
                        <td ref="4-2"></td>
                        <td ref="4-3"></td>
                        <td ref="4-4"></td>
                        <td style="width:auto;" ref="4-result"></td>
                    </tr>
                    <tr>
                        <th>5</th>
                        <td ref="5-1"></td>
                        <td ref="5-2"></td>
                        <td ref="5-3"></td>
                        <td ref="5-4"></td>
                        <td style="width:auto;" ref="5-result"></td>
                    </tr>

                    <tr>
                        <th>6</th>
                        <td ref="6-1"></td>
                        <td ref="6-2"></td>
                        <td ref="6-3"></td>
                        <td ref="6-4"></td>
                        <td style="width:auto;" ref="6-result"></td>
                    </tr>
                    <tr>
                        <th>7</th>
                        <td ref="7-1"></td>
                        <td ref="7-2"></td>
                        <td ref="7-3"></td>
                        <td ref="7-4"></td>
                        <td style="width:auto;" ref="7-result"></td>
                    </tr>

                    <tr>
                        <th>8</th>
                        <td ref="8-1"></td>
                        <td ref="8-2"></td>
                        <td ref="8-3"></td>
                        <td ref="8-4"></td>
                        <td style="width:auto;" ref="8-result"></td>
                    </tr>
                </tbody>
                <div class="toast-container position-fixed bottom-1 start-0 p-3">
                    <div id="toast" class="toast" role="alert" aria-live="polite" aria-atomic="true"
                        data-bs-delay="2000">
                        <div class="toast-body">
                            すべてを選択してください
                        </div>
                    </div>
                </div>
                <div class="toast-container position-fixed bottom-1 start-0 p-3">
                    <div id="toast1" class="toast" role="alert" aria-live="polite" aria-atomic="true"
                        data-bs-delay="60000">
                        <div class="toast-body">
                            クリア<a href="/single">もう一度プレイ</a>
                        </div>
                    </div>
                </div>
            </table>
        </div>
    </div>
</template>
<style scoped>
#table table tr td {
            width: 30px;
            height: 30px;
        }

        th,
        td {
            border: solid 1px;
            /* 枠線指定 */
        }

        table {
            border-collapse: collapse;
            /* セルの線を重ねる */
        }
        .selection {
          border: solid 3px
        }
</style>
