package com.expediagroup.graphql.generated.inputs

import com.expediagroup.graphql.client.Generated
import com.expediagroup.graphql.client.jackson.types.OptionalInput
import com.expediagroup.graphql.client.jackson.types.OptionalInput.Undefined
import com.expediagroup.graphql.generated.ID
import com.expediagroup.graphql.generated.scalars.AnyToULocaleConverter
import com.expediagroup.graphql.generated.scalars.OptionalScalarInputSerializer
import com.expediagroup.graphql.generated.scalars.ULocaleToAnyConverter
import com.fasterxml.jackson.databind.`annotation`.JsonDeserialize
import com.fasterxml.jackson.databind.`annotation`.JsonSerialize
import com.ibm.icu.util.ULocale
import java.util.UUID
import kotlin.Boolean
import kotlin.Double
import kotlin.Int
import kotlin.String
import kotlin.collections.List

/**
 * Wrapper that holds all supported scalar types
 */
@Generated
public data class ScalarWrapperInput(
  /**
   * A signed 32-bit nullable integer value
   */
  public val count: OptionalInput<Int> = OptionalInput.Undefined,
  /**
   * Custom scalar of UUID
   */
  @JsonSerialize(using = OptionalScalarInputSerializer::class)
  public val custom: OptionalInput<UUID> = OptionalInput.Undefined,
  /**
   * List of custom scalar UUIDs
   */
  @JsonSerialize(using = OptionalScalarInputSerializer::class)
  public val customList: OptionalInput<List<UUID>> = OptionalInput.Undefined,
  /**
   * ID represents unique identifier that is not intended to be human readable
   */
  public val id: ID,
  /**
   * Optional ID
   */
  public val optionalId: OptionalInput<ID> = OptionalInput.Undefined,
  /**
   * UTF-8 character sequence
   */
  public val name: String,
  /**
   * Optional list of names
   */
  public val nameList: OptionalInput<List<String>> = OptionalInput.Undefined,
  /**
   * A nullable signed double-precision floating-point value
   */
  public val rating: OptionalInput<Double> = OptionalInput.Undefined,
  /**
   * Either true or false
   */
  public val valid: Boolean,
  /**
   * Custom scalar of Locale
   */
  @JsonSerialize(converter = ULocaleToAnyConverter::class)
  @JsonDeserialize(converter = AnyToULocaleConverter::class)
  public val locale: ULocale,
  /**
   * List of custom scalar Locales
   */
  @JsonSerialize(contentConverter = ULocaleToAnyConverter::class)
  @JsonDeserialize(contentConverter = AnyToULocaleConverter::class)
  public val listLocale: List<ULocale>
)
