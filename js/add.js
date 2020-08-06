//ゴミ箱アイコン
let removeIcon = '<i class="far fa-trash-alt fa-lg"></i>';
//完了アイコン
let doneIcon = '<i class="far fa-check-circle fa-lg"></i>';


$('#add').click(function(){
    let inputTask = $('#task');
    let task = inputTask.val();
    if (task == '') {
        return;
    }

    let li = $('<li>');
    li.text(task);

    let buttons = $('<div>');
    buttons.addClass('buttons');
    
    //削除ボタン
    let remove = $('<button>');
    remove.addClass('remove');
    remove.html(removeIcon);

    //削除ボタンがクリックされたら関数removeTaskを実行する。
    remove.click(removeTask);

    //完了ボタン
    let done = $('<button>');
    done.addClass('done');
    done.html(doneIcon);

    //完了ボタンがクリックされたら関数doneTaskを実行する。
    done.click(doneTask);

    buttons.append(remove);
    buttons.append(done);

    li.append(buttons);


    $('#not-yet').prepend(li);

    //入力リセットする。
    inputTask.val('');
});

//タスクを削除する
function removeTask() {
    let task = $(this).closest('li');
    task.remove();
}

//タスク完了を押したらdoneに移動する
function doneTask() {
    let task = $(this).closest('li');
    //doneタスクの時に処理中断
    let id = task.parent().attr('id');
    if(id == 'done') {
        return;
    }

    $('#done').append(task);
}

//担当業務一覧が完了したら削除。
$('.complete').click(function(){
    let clear = $(this).closest('li');
    clear.remove();
})