import { describe, expect, it } from 'vitest';
import { createContactSchema } from '@/lib/contact';
import { en, tr } from '@/i18n/messages';

describe('localized contact validation', () => {
  it.each([en, tr])(
    'rejects blank/whitespace fields and invalid email addresses',
    async (messages) => {
      const schema = createContactSchema(messages);
      await expect(
        schema.validate(
          { name: '  ', email: 'invalid', subject: '  ', message: '  ' },
          { abortEarly: false }
        )
      ).rejects.toMatchObject({
        errors: expect.arrayContaining([messages.required, messages.invalidEmail])
      });
    }
  );
  it('accepts Turkish names and trims values without losing diacritics', async () => {
    const value = await createContactSchema(tr).validate({
      name: '  Şule İrmak  ',
      email: ' test@example.com ',
      subject: ' Merhaba ',
      message: ' Görüşebilir miyiz? '
    });
    expect(value.name).toBe('Şule İrmak');
    expect(value.email).toBe('test@example.com');
  });
  it('rejects messages exceeding the public form limit', async () => {
    await expect(
      createContactSchema(en).validate({
        name: 'Name',
        email: 'test@example.com',
        subject: 'Hello',
        message: 'x'.repeat(5001)
      })
    ).rejects.toThrow(en.tooLong);
  });
});
