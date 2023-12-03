// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { RadioGroupProps } from './interfaces';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import useBaseComponent from '../internal/hooks/use-base-component';
import InternalRadioGroup from './internal';

export { RadioGroupProps };

function RadioGroup<TValue extends string>(props: RadioGroupProps<TValue>, ref: React.Ref<RadioGroupProps.Ref>) {
  const baseComponentProps = useBaseComponent('RadioGroup');
  return <InternalRadioGroup<TValue> ref={ref} {...props} {...baseComponentProps} />;
}

applyDisplayName(RadioGroup, 'RadioGroup');

export default React.forwardRef(RadioGroup) as <TValue extends string>(
  props: RadioGroupProps<TValue> & { ref?: React.ForwardedRef<RadioGroupProps.Ref> }
) => ReturnType<typeof RadioGroup>;
