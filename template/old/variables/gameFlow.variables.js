part=[];
array[0]='H';
array[1]='O注意！';
array[2]='GE玩家们不能看到自己手牌的牌面！！手牌必须以牌面背对自己，只能看到牌背的方式拿着。';
array[3]='GE所以除了你之外，其他人都可以看到你的手牌。 在整个游戏中，你不能以任何方式看自己的手牌。';
array[4]='GE身上穿的衣服有最多颜色的人为起始玩家。';
array[5]='G顺时针轮流进行游戏,你的回合可以行动，';
array[6]='O3';
array[7]='GE选1：';
part[0]=generate(array);
list_line = '';
array=[];
array[0]='S1 - 传递讯息给其他人';
array[1]='G要传达讯息，你必须从盒子里移出';
array[2]='O1';
array[3]='GE个传递指示物到盒子外。如果盒子里已经没有传递指示物，则不能选择此行动执行。';
array[4]='G告诉1名玩家他1种';
array[5]='O颜色';
array[6]='G或1个';
array[7]='O数字';
array[8]='G的';
array[9]='O所有';
array[10]='GE牌。';
array[11]='G你必须告诉对方';
array[12]='O完整';
array[13]='GE的讯息，比如你选择告诉他有绿色的牌，就必须把绿色牌全部点出。';
array[14]='SE';
part[1]=generate(array);
list_line = '';
array=[];
array[0]='S2 - 弃掉1张手牌';
array[1]='GE弃掉的牌面朝上放在弃牌堆里，然后你可以从盒子外补充1个传递指示物放回盒子里。  ';
array[2]='GE从牌库中抽1张新的牌加入自己的手牌中。同样的，也不能看自己新抽出的手牌。';
array[3]='GE如果传递指示物都在盒子里，就不能选择此行动。';
array[4]='SE';
part[2]=generate(array);
list_line = '';
array=[];
array[0]='S3 - 打出1张手牌';
array[1]='GE从手牌中打出1张牌，可能会发生以下情况之一：';
array[2]='GE1、将这张牌加入花火之中，然后从牌库抽1张新的牌加入手牌中。';
array[3]='GE2、如果这张牌无法加入花火之中，就将此牌丢进弃牌堆，并将1个错误指示物放进盒子内，然后从牌库抽1张新的牌加入手牌中。';
array[4]='SE';
part[3]=generate(array);
list_line = '';
array=[];
array[0]='S组建花火';
array[1]='GE花火牌只能加在同颜色的花火组里。每组花火只能由1种颜色组成。花火必须由数字1依序加到数字5。花火内每个数字只能各有一张。';
array[2]='GE当有人打出数字5的牌并加入花火中，完成1组花火后，就可以获得奖励，将1个传递指示物从盒子外移入盒子内。';
array[3]='GE如果传递指示物都在盒子内，就无法获得此奖励。';
array[4]='GE玩家不能在非自己的回合中给予其他人暗示或建议。可以随时调整手牌顺序或查看弃牌堆。';
array[5]='SE';
part[4]=generate(array);
list_line = '';
array=[];
