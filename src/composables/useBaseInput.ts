import { Events } from '@/enums/events.enum';
import type { BaseInputEmits } from '@/interfaces/base-input-emits.interface';

export const useBaseInput = (emit: BaseInputEmits) => {
  const handleInput = (value: string): void => {
    emit(Events.UPDATE_MODEL_VALUE, value);
  };

  return {
    handleInput
  };
};
