(function() {var implementors = {};
implementors['libc'] = [];implementors['num'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;<a class='struct' href='num/bigint/struct.BigUint.html' title='num::bigint::BigUint'>BigUint</a>&gt; for <a class='struct' href='num/bigint/struct.BigUint.html' title='num::bigint::BigUint'>BigUint</a>","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;<a class='struct' href='num/bigint/struct.BigUint.html' title='num::bigint::BigUint'>BigUint</a>&gt; for &amp;'a <a class='struct' href='num/bigint/struct.BigUint.html' title='num::bigint::BigUint'>BigUint</a>","impl&lt;'a, 'b&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;&amp;'b <a class='struct' href='num/bigint/struct.BigUint.html' title='num::bigint::BigUint'>BigUint</a>&gt; for &amp;'a <a class='struct' href='num/bigint/struct.BigUint.html' title='num::bigint::BigUint'>BigUint</a>","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;&amp;'a <a class='struct' href='num/bigint/struct.BigUint.html' title='num::bigint::BigUint'>BigUint</a>&gt; for <a class='struct' href='num/bigint/struct.BigUint.html' title='num::bigint::BigUint'>BigUint</a>",];implementors['ndarray'] = ["impl&lt;A, S, S2, D, E&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;<a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S2, E&gt;&gt; for <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt; <span class='where'>where A: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;A, Output=A&gt;, S: <a class='trait' href='ndarray/trait.DataOwned.html' title='ndarray::DataOwned'>DataOwned</a>&lt;Elem=A&gt; + <a class='trait' href='ndarray/trait.DataMut.html' title='ndarray::DataMut'>DataMut</a>, S2: <a class='trait' href='ndarray/trait.Data.html' title='ndarray::Data'>Data</a>&lt;Elem=A&gt;, D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a>, E: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>","impl&lt;'a, A, S, S2, D, E&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;&amp;'a <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S2, E&gt;&gt; for <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt; <span class='where'>where A: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;A, Output=A&gt;, S: <a class='trait' href='ndarray/trait.DataMut.html' title='ndarray::DataMut'>DataMut</a>&lt;Elem=A&gt;, S2: <a class='trait' href='ndarray/trait.Data.html' title='ndarray::Data'>Data</a>&lt;Elem=A&gt;, D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a>, E: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>","impl&lt;'a, 'b, A, S, S2, D, E&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;&amp;'a <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S2, E&gt;&gt; for &amp;'b <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt; <span class='where'>where A: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;A, Output=A&gt;, S: <a class='trait' href='ndarray/trait.Data.html' title='ndarray::Data'>Data</a>&lt;Elem=A&gt;, S2: <a class='trait' href='ndarray/trait.Data.html' title='ndarray::Data'>Data</a>&lt;Elem=A&gt;, D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a>, E: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>","impl&lt;A, S, D, B&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;B&gt; for <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt; <span class='where'>where A: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;B, Output=A&gt;, S: <a class='trait' href='ndarray/trait.DataOwned.html' title='ndarray::DataOwned'>DataOwned</a>&lt;Elem=A&gt; + <a class='trait' href='ndarray/trait.DataMut.html' title='ndarray::DataMut'>DataMut</a>, D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a>, B: <a class='trait' href='ndarray/trait.ScalarOperand.html' title='ndarray::ScalarOperand'>ScalarOperand</a></span>","impl&lt;'a, A, S, D, B&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;B&gt; for &amp;'a <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt; <span class='where'>where A: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;B, Output=A&gt;, S: <a class='trait' href='ndarray/trait.Data.html' title='ndarray::Data'>Data</a>&lt;Elem=A&gt;, D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a>, B: <a class='trait' href='ndarray/trait.ScalarOperand.html' title='ndarray::ScalarOperand'>ScalarOperand</a></span>","impl&lt;S, D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;<a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.i8.html'>i8</a> <span class='where'>where S: <a class='trait' href='ndarray/trait.DataMut.html' title='ndarray::DataMut'>DataMut</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.i8.html'>i8</a>&gt;, D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>","impl&lt;'a, S, D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;&amp;'a <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.i8.html'>i8</a> <span class='where'>where S: <a class='trait' href='ndarray/trait.Data.html' title='ndarray::Data'>Data</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.i8.html'>i8</a>&gt;, D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>","impl&lt;S, D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;<a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u8.html'>u8</a> <span class='where'>where S: <a class='trait' href='ndarray/trait.DataMut.html' title='ndarray::DataMut'>DataMut</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u8.html'>u8</a>&gt;, D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>","impl&lt;'a, S, D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;&amp;'a <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u8.html'>u8</a> <span class='where'>where S: <a class='trait' href='ndarray/trait.Data.html' title='ndarray::Data'>Data</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u8.html'>u8</a>&gt;, D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>","impl&lt;S, D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;<a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.i16.html'>i16</a> <span class='where'>where S: <a class='trait' href='ndarray/trait.DataMut.html' title='ndarray::DataMut'>DataMut</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.i16.html'>i16</a>&gt;, D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>","impl&lt;'a, S, D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;&amp;'a <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.i16.html'>i16</a> <span class='where'>where S: <a class='trait' href='ndarray/trait.Data.html' title='ndarray::Data'>Data</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.i16.html'>i16</a>&gt;, D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>","impl&lt;S, D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;<a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u16.html'>u16</a> <span class='where'>where S: <a class='trait' href='ndarray/trait.DataMut.html' title='ndarray::DataMut'>DataMut</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u16.html'>u16</a>&gt;, D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>","impl&lt;'a, S, D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;&amp;'a <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u16.html'>u16</a> <span class='where'>where S: <a class='trait' href='ndarray/trait.Data.html' title='ndarray::Data'>Data</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u16.html'>u16</a>&gt;, D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>","impl&lt;S, D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;<a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.i32.html'>i32</a> <span class='where'>where S: <a class='trait' href='ndarray/trait.DataMut.html' title='ndarray::DataMut'>DataMut</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.i32.html'>i32</a>&gt;, D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>","impl&lt;'a, S, D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;&amp;'a <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.i32.html'>i32</a> <span class='where'>where S: <a class='trait' href='ndarray/trait.Data.html' title='ndarray::Data'>Data</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.i32.html'>i32</a>&gt;, D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>","impl&lt;S, D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;<a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u32.html'>u32</a> <span class='where'>where S: <a class='trait' href='ndarray/trait.DataMut.html' title='ndarray::DataMut'>DataMut</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u32.html'>u32</a>&gt;, D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>","impl&lt;'a, S, D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;&amp;'a <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u32.html'>u32</a> <span class='where'>where S: <a class='trait' href='ndarray/trait.Data.html' title='ndarray::Data'>Data</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u32.html'>u32</a>&gt;, D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>","impl&lt;S, D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;<a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.i64.html'>i64</a> <span class='where'>where S: <a class='trait' href='ndarray/trait.DataMut.html' title='ndarray::DataMut'>DataMut</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.i64.html'>i64</a>&gt;, D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>","impl&lt;'a, S, D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;&amp;'a <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.i64.html'>i64</a> <span class='where'>where S: <a class='trait' href='ndarray/trait.Data.html' title='ndarray::Data'>Data</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.i64.html'>i64</a>&gt;, D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>","impl&lt;S, D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;<a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u64.html'>u64</a> <span class='where'>where S: <a class='trait' href='ndarray/trait.DataMut.html' title='ndarray::DataMut'>DataMut</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u64.html'>u64</a>&gt;, D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>","impl&lt;'a, S, D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;&amp;'a <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u64.html'>u64</a> <span class='where'>where S: <a class='trait' href='ndarray/trait.Data.html' title='ndarray::Data'>Data</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u64.html'>u64</a>&gt;, D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>","impl&lt;S, D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;<a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.bool.html'>bool</a> <span class='where'>where S: <a class='trait' href='ndarray/trait.DataMut.html' title='ndarray::DataMut'>DataMut</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.bool.html'>bool</a>&gt;, D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>","impl&lt;'a, S, D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;&amp;'a <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.bool.html'>bool</a> <span class='where'>where S: <a class='trait' href='ndarray/trait.Data.html' title='ndarray::Data'>Data</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.bool.html'>bool</a>&gt;, D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>",];implementors['sprs'] = ["impl&lt;A, S, S2, D, E&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;<a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S2, E&gt;&gt; for <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt; <span class='where'>where D: <a class='trait' href='ndarray/dimension/trait.Dimension.html' title='ndarray::dimension::Dimension'>Dimension</a>, E: <a class='trait' href='ndarray/dimension/trait.Dimension.html' title='ndarray::dimension::Dimension'>Dimension</a>, S: <a class='trait' href='ndarray/data_traits/trait.DataOwned.html' title='ndarray::data_traits::DataOwned'>DataOwned</a>&lt;Elem=A&gt; + <a class='trait' href='ndarray/data_traits/trait.DataMut.html' title='ndarray::data_traits::DataMut'>DataMut</a>, A: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;A, Output=A&gt;, S2: <a class='trait' href='ndarray/data_traits/trait.Data.html' title='ndarray::data_traits::Data'>Data</a>&lt;Elem=A&gt;</span>","impl&lt;'a, A, S, S2, D, E&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;&amp;'a <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S2, E&gt;&gt; for <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt; <span class='where'>where D: <a class='trait' href='ndarray/dimension/trait.Dimension.html' title='ndarray::dimension::Dimension'>Dimension</a>, E: <a class='trait' href='ndarray/dimension/trait.Dimension.html' title='ndarray::dimension::Dimension'>Dimension</a>, S: <a class='trait' href='ndarray/data_traits/trait.DataMut.html' title='ndarray::data_traits::DataMut'>DataMut</a>&lt;Elem=A&gt;, S2: <a class='trait' href='ndarray/data_traits/trait.Data.html' title='ndarray::data_traits::Data'>Data</a>&lt;Elem=A&gt;, A: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;A, Output=A&gt;</span>","impl&lt;'a, 'b, A, S, S2, D, E&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;&amp;'a <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S2, E&gt;&gt; for &amp;'b <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt; <span class='where'>where A: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;A, Output=A&gt;, S2: <a class='trait' href='ndarray/data_traits/trait.Data.html' title='ndarray::data_traits::Data'>Data</a>&lt;Elem=A&gt;, S: <a class='trait' href='ndarray/data_traits/trait.Data.html' title='ndarray::data_traits::Data'>Data</a>&lt;Elem=A&gt;, D: <a class='trait' href='ndarray/dimension/trait.Dimension.html' title='ndarray::dimension::Dimension'>Dimension</a>, E: <a class='trait' href='ndarray/dimension/trait.Dimension.html' title='ndarray::dimension::Dimension'>Dimension</a></span>","impl&lt;A, S, D, B&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;B&gt; for <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt; <span class='where'>where A: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;B, Output=A&gt;, S: <a class='trait' href='ndarray/data_traits/trait.DataOwned.html' title='ndarray::data_traits::DataOwned'>DataOwned</a>&lt;Elem=A&gt; + <a class='trait' href='ndarray/data_traits/trait.DataMut.html' title='ndarray::data_traits::DataMut'>DataMut</a>, B: <a class='trait' href='ndarray/impl_ops/trait.ScalarOperand.html' title='ndarray::impl_ops::ScalarOperand'>ScalarOperand</a>, D: <a class='trait' href='ndarray/dimension/trait.Dimension.html' title='ndarray::dimension::Dimension'>Dimension</a></span>","impl&lt;'a, A, S, D, B&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;B&gt; for &amp;'a <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt; <span class='where'>where B: <a class='trait' href='ndarray/impl_ops/trait.ScalarOperand.html' title='ndarray::impl_ops::ScalarOperand'>ScalarOperand</a>, D: <a class='trait' href='ndarray/dimension/trait.Dimension.html' title='ndarray::dimension::Dimension'>Dimension</a>, A: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;B, Output=A&gt;, S: <a class='trait' href='ndarray/data_traits/trait.Data.html' title='ndarray::data_traits::Data'>Data</a>&lt;Elem=A&gt;</span>","impl&lt;S, D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;<a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.i8.html'>i8</a> <span class='where'>where D: <a class='trait' href='ndarray/dimension/trait.Dimension.html' title='ndarray::dimension::Dimension'>Dimension</a>, S: <a class='trait' href='ndarray/data_traits/trait.DataMut.html' title='ndarray::data_traits::DataMut'>DataMut</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.i8.html'>i8</a>&gt;</span>","impl&lt;'a, S, D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;&amp;'a <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.i8.html'>i8</a> <span class='where'>where D: <a class='trait' href='ndarray/dimension/trait.Dimension.html' title='ndarray::dimension::Dimension'>Dimension</a>, S: <a class='trait' href='ndarray/data_traits/trait.Data.html' title='ndarray::data_traits::Data'>Data</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.i8.html'>i8</a>&gt;</span>","impl&lt;S, D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;<a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u8.html'>u8</a> <span class='where'>where S: <a class='trait' href='ndarray/data_traits/trait.DataMut.html' title='ndarray::data_traits::DataMut'>DataMut</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u8.html'>u8</a>&gt;, D: <a class='trait' href='ndarray/dimension/trait.Dimension.html' title='ndarray::dimension::Dimension'>Dimension</a></span>","impl&lt;'a, S, D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;&amp;'a <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u8.html'>u8</a> <span class='where'>where S: <a class='trait' href='ndarray/data_traits/trait.Data.html' title='ndarray::data_traits::Data'>Data</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u8.html'>u8</a>&gt;, D: <a class='trait' href='ndarray/dimension/trait.Dimension.html' title='ndarray::dimension::Dimension'>Dimension</a></span>","impl&lt;S, D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;<a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.i16.html'>i16</a> <span class='where'>where S: <a class='trait' href='ndarray/data_traits/trait.DataMut.html' title='ndarray::data_traits::DataMut'>DataMut</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.i16.html'>i16</a>&gt;, D: <a class='trait' href='ndarray/dimension/trait.Dimension.html' title='ndarray::dimension::Dimension'>Dimension</a></span>","impl&lt;'a, S, D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;&amp;'a <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.i16.html'>i16</a> <span class='where'>where S: <a class='trait' href='ndarray/data_traits/trait.Data.html' title='ndarray::data_traits::Data'>Data</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.i16.html'>i16</a>&gt;, D: <a class='trait' href='ndarray/dimension/trait.Dimension.html' title='ndarray::dimension::Dimension'>Dimension</a></span>","impl&lt;S, D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;<a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u16.html'>u16</a> <span class='where'>where S: <a class='trait' href='ndarray/data_traits/trait.DataMut.html' title='ndarray::data_traits::DataMut'>DataMut</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u16.html'>u16</a>&gt;, D: <a class='trait' href='ndarray/dimension/trait.Dimension.html' title='ndarray::dimension::Dimension'>Dimension</a></span>","impl&lt;'a, S, D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;&amp;'a <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u16.html'>u16</a> <span class='where'>where D: <a class='trait' href='ndarray/dimension/trait.Dimension.html' title='ndarray::dimension::Dimension'>Dimension</a>, S: <a class='trait' href='ndarray/data_traits/trait.Data.html' title='ndarray::data_traits::Data'>Data</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u16.html'>u16</a>&gt;</span>","impl&lt;S, D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;<a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.i32.html'>i32</a> <span class='where'>where D: <a class='trait' href='ndarray/dimension/trait.Dimension.html' title='ndarray::dimension::Dimension'>Dimension</a>, S: <a class='trait' href='ndarray/data_traits/trait.DataMut.html' title='ndarray::data_traits::DataMut'>DataMut</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.i32.html'>i32</a>&gt;</span>","impl&lt;'a, S, D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;&amp;'a <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.i32.html'>i32</a> <span class='where'>where D: <a class='trait' href='ndarray/dimension/trait.Dimension.html' title='ndarray::dimension::Dimension'>Dimension</a>, S: <a class='trait' href='ndarray/data_traits/trait.Data.html' title='ndarray::data_traits::Data'>Data</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.i32.html'>i32</a>&gt;</span>","impl&lt;S, D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;<a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u32.html'>u32</a> <span class='where'>where D: <a class='trait' href='ndarray/dimension/trait.Dimension.html' title='ndarray::dimension::Dimension'>Dimension</a>, S: <a class='trait' href='ndarray/data_traits/trait.DataMut.html' title='ndarray::data_traits::DataMut'>DataMut</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u32.html'>u32</a>&gt;</span>","impl&lt;'a, S, D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;&amp;'a <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u32.html'>u32</a> <span class='where'>where D: <a class='trait' href='ndarray/dimension/trait.Dimension.html' title='ndarray::dimension::Dimension'>Dimension</a>, S: <a class='trait' href='ndarray/data_traits/trait.Data.html' title='ndarray::data_traits::Data'>Data</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u32.html'>u32</a>&gt;</span>","impl&lt;S, D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;<a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.i64.html'>i64</a> <span class='where'>where S: <a class='trait' href='ndarray/data_traits/trait.DataMut.html' title='ndarray::data_traits::DataMut'>DataMut</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.i64.html'>i64</a>&gt;, D: <a class='trait' href='ndarray/dimension/trait.Dimension.html' title='ndarray::dimension::Dimension'>Dimension</a></span>","impl&lt;'a, S, D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;&amp;'a <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.i64.html'>i64</a> <span class='where'>where S: <a class='trait' href='ndarray/data_traits/trait.Data.html' title='ndarray::data_traits::Data'>Data</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.i64.html'>i64</a>&gt;, D: <a class='trait' href='ndarray/dimension/trait.Dimension.html' title='ndarray::dimension::Dimension'>Dimension</a></span>","impl&lt;S, D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;<a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u64.html'>u64</a> <span class='where'>where S: <a class='trait' href='ndarray/data_traits/trait.DataMut.html' title='ndarray::data_traits::DataMut'>DataMut</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u64.html'>u64</a>&gt;, D: <a class='trait' href='ndarray/dimension/trait.Dimension.html' title='ndarray::dimension::Dimension'>Dimension</a></span>","impl&lt;'a, S, D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;&amp;'a <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u64.html'>u64</a> <span class='where'>where S: <a class='trait' href='ndarray/data_traits/trait.Data.html' title='ndarray::data_traits::Data'>Data</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u64.html'>u64</a>&gt;, D: <a class='trait' href='ndarray/dimension/trait.Dimension.html' title='ndarray::dimension::Dimension'>Dimension</a></span>","impl&lt;S, D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;<a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.bool.html'>bool</a> <span class='where'>where D: <a class='trait' href='ndarray/dimension/trait.Dimension.html' title='ndarray::dimension::Dimension'>Dimension</a>, S: <a class='trait' href='ndarray/data_traits/trait.DataMut.html' title='ndarray::data_traits::DataMut'>DataMut</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.bool.html'>bool</a>&gt;</span>","impl&lt;'a, S, D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitOr.html' title='core::ops::BitOr'>BitOr</a>&lt;&amp;'a <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S, D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.bool.html'>bool</a> <span class='where'>where D: <a class='trait' href='ndarray/dimension/trait.Dimension.html' title='ndarray::dimension::Dimension'>Dimension</a>, S: <a class='trait' href='ndarray/data_traits/trait.Data.html' title='ndarray::data_traits::Data'>Data</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.bool.html'>bool</a>&gt;</span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
