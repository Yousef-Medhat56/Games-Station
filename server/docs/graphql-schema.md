# Schema Types

<details>
  <summary><strong>Table of Contents</strong></summary>

  * [Query](#query)
  * [Mutation](#mutation)
  * [Objects](#objects)
    * [Admin](#admin)
  * [Inputs](#inputs)
    * [CreateAdminDto](#createadmindto)
    * [UpdateAdminDto](#updateadmindto)
  * [Scalars](#scalars)
    * [Boolean](#boolean)
    * [ID](#id)
    * [Int](#int)
    * [JSON](#json)
    * [String](#string)

</details>

## Query
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>admins</strong></td>
<td valign="top">[<a href="#admin">Admin</a>!]!</td>
<td>

Return admins list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">skip</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Specifies how many of the returned objects in the list should be skipped

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">take</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Specifies how many objects should be returned in the list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">cursor</td>
<td valign="top"><a href="#json">JSON</a></td>
<td>

Specifies the position for the list

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#json">JSON</a></td>
<td>

Filter the admin list by its properties

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orderBy</td>
<td valign="top"><a href="#json">JSON</a></td>
<td>

Order the returned admin list by any property

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>admin</strong></td>
<td valign="top"><a href="#admin">Admin</a>!</td>
<td>

Return one admin using his `id`

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The admin id

</td>
</tr>
</tbody>
</table>

## Mutation
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>createAdmin</strong></td>
<td valign="top"><a href="#admin">Admin</a>!</td>
<td>

Create a new admin

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#createadmindto">CreateAdminDto</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateAdmin</strong></td>
<td valign="top"><a href="#admin">Admin</a>!</td>
<td>

Update one admin using his `id`

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The admin id

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#updateadmindto">UpdateAdminDto</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteAdmin</strong></td>
<td valign="top"><a href="#admin">Admin</a>!</td>
<td>

Delete one admin using his `id`

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The admin id

</td>
</tr>
</tbody>
</table>

## Objects

### Admin

The Admin object

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>admin_id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The admin ID

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>email</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The admin email

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>password</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The admin password

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>first_name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The admin first name

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>last_name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The admin last name

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>is_super_admin</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

The admin state whether he is the super admin or not

</td>
</tr>
</tbody>
</table>

## Inputs

### CreateAdminDto

The input type for creating a new admin

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>email</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The admin email

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>first_name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The admin first name

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>last_name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The admin last name

</td>
</tr>
</tbody>
</table>

### UpdateAdminDto

The input type for creating a new admin

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>password</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The admin password

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>first_name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The admin first name

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>last_name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The admin last name

</td>
</tr>
</tbody>
</table>

## Scalars

### Boolean

The `Boolean` scalar type represents `true` or `false`.

### ID

The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.

### Int

The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.

### JSON

The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).

### String

The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.

