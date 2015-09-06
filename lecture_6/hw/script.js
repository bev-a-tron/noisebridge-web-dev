$('.add').on('click', function (event) {
    event.preventDefault();

    var toDoList = $('.to-do-list');
    var lastItem = toDoList.find('li').last();
    var newItem = lastItem.clone();

    var newField = $('.new-field');
    var newItemText = newField.val();

    newItem.text(newItemText);
    toDoList.append(newItem);

    newField.val("");
});

