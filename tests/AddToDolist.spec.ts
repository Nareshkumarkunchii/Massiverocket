import { test, expect } from '@playwright/test';
import type { Page } from '@playwright/test';

test.describe.configure({ mode: 'parallel' });

test.beforeEach(async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/');
});

const add_todo_list = [
  'Naresh1 QA1 Todo1 added',
  'QA2 Todo added',
  'QA3 todo added'
];

test.describe(' Test Scenarios:Add New Todos ', () => {
  test('Verify user can add todo items and shown added Todos able to see them in list', async ({ page }) => {
    // create a new todo locator
    const newTodo = page.getByPlaceholder('What needs to be done?');
    // Create 1st todo.
    await newTodo.fill(add_todo_list[0]);
    await newTodo.press('Enter');

    // Make sure the list only has one todo item.
    await expect(page.getByTestId('todo-item-label')).toHaveText([
      add_todo_list[0]
    ]);
    console.log(add_todo_list[0]);

    // Create 2nd todo.
    await newTodo.fill(add_todo_list[1]);
    await newTodo.press('Enter');
    console.log(add_todo_list[1]);

    // Make sure the list now has two todo items.
    await expect(page.getByTestId('todo-item-label')).toHaveText([
      add_todo_list[0],
      add_todo_list[1],
    ]);

    // Create 3rd todo.
    await newTodo.fill(add_todo_list[2]);
    await newTodo.press('Enter');
    console.log(add_todo_list[2]);

    // Make sure the list now has three todo items.
    await expect(page.getByTestId('todo-item-label')).toHaveText([
      add_todo_list[0],
      add_todo_list[1],
      add_todo_list[2],
        ]);
  page.close();
  });
  });




  


  