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


test.describe('Test Scenarios: Add New Todos', () => {
  test('Verify user can add todo items and see them in the list', async ({ page }) => {
    // create a new todo locator
    const newTodo = page.locator('[placeholder="What needs to be done?"]');
    // Create 1st todo.
    await newTodo.fill(add_todo_list[0]);
    await newTodo.press('Enter');

    // Make sure the list only has one todo item.
    await expect(page.locator('[data-testid="todo-item-label"]')).toHaveText([
      add_todo_list[0]
    ]);

    // Create 2nd todo.
    await newTodo.fill(add_todo_list[1]);
    await newTodo.press('Enter');

    // Make sure the list now has two todo items.
    await expect(page.locator('[data-testid="todo-item-label"]')).toHaveText([
      add_todo_list[0],
      add_todo_list[1],
    ]);

    // Create 3rd todo.
    await newTodo.fill(add_todo_list[2]);
    await newTodo.press('Enter');

    // Make sure the list now has three todo items.
    await expect(page.locator('[data-testid="todo-item-label"]')).toHaveText([
      add_todo_list[0],
      add_todo_list[1],
      add_todo_list[2],
    ]);
  });
});




// Complete Todo steps 

test.describe('Check Completed Check box and works as exepcted', () => {

  test('User can able to mark items as complete', async ({ page }) => {
    // create a new todo locator
    const newTodo = page.getByPlaceholder('What needs to be done?');

    // Create two items.
    for (const item of add_todo_list.slice(0, 2)) {
      await newTodo.fill(item);
      await newTodo.press('Enter');
    }

    // Check first item.
    const firstTodo = page.getByTestId('todo-item').nth(0);
    await firstTodo.getByRole('checkbox').check();
    await expect(firstTodo).toHaveClass('completed');

    // Check second item.
    const secondTodo = page.getByTestId('todo-item').nth(1);
    await expect(secondTodo).not.toHaveClass('completed');
    await secondTodo.getByRole('checkbox').check();

    // Assert completed class.
    await expect(firstTodo).toHaveClass('completed');
    await expect(secondTodo).toHaveClass('completed');
  });
});


