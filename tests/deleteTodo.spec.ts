import { test, expect } from '@playwright/test';
import type { Page } from '@playwright/test';

test.describe.configure({ mode: 'parallel' });

test.beforeEach(async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/');
});

const add_todo_list = [
  'QA1 Todo1 added',
  'QA2 Todo added',
  'QA3 todo added'
];


test.describe('Test Scenarios: Delete Todos', () => {
  test('Verify user can Delete todo items and see them in the list', async ({ page }) => {
    // create a new todo locator
    const newTodo = page.locator('[placeholder="What needs to be done?"]');
    // Create 1st todo.
    await newTodo.fill(add_todo_list[0]);
    await newTodo.press('Enter');
    // Create 2nd todo.
    await newTodo.fill(add_todo_list[1]);
    await newTodo.press('Enter');
    // Create 3rd todo.
    await newTodo.fill(add_todo_list[2]);
    await newTodo.press('Enter');

    //Delete todo
    // Find the element you want to hover over
    const element = await page.locator('todo-item');
   // Hover over the element
    await element.hover();
    // click on x icon to delete 1st item
    await element.getByRole('button', { name: '×' }).click(); 
    
  });
});
